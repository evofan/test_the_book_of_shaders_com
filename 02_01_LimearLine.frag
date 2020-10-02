#ifdef GL_ES
precision mediump float;
#endif

/*
uniform vec2 u_resolution; // 解像度
uniform vec2 u_mouse; // マウス座標
uniform float u_time; // 経過時間

// 0.0〜1.0の値を使用してYにラインをプロットします（描きます）
float plot(vec2 st,float pct){ // pct=百分率？
    return smoothstep(pct-0.02,pct,st.y)-smoothstep(pct,pct+0.02,st.y);
}

void main(){
    vec2 st=gl_FragCoord.xy/u_resolution; // xy座標を解像度で割った値
    
    float y=st.x; // y座標はstraight?のx座標
    
    vec3 color=vec3(y); // vec3型のコンストラクも値を1つだけ渡すと、3つのチャンネルに同じ値を割り当てると解釈する
    
    // 線を描く
    float pct=plot(st,y);
    color=(1.-pct)*color+pct*vec3(0.0,1.0,0.0);
    
    gl_FragColor=vec4(color,1.0); // vec3ともう1つの値（透明度）で初期化されている
}
*/

// このサンプルのx座標とy座標（又は明るさ）の1対1の対応は、★線形補間と呼ばれている
// ここから数学的な関数を使って、線を形作っていく事になる。
// x=0.0～1.0間のグラフが一次法的式で描ける⇒線形補完（Linear Interpolator）

// Author: Inigo Quiles
// Title: Expo

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st,float pct){
    return smoothstep(pct-.02,pct,st.y)-
    smoothstep(pct,pct+.02,st.y);
}

void main(){
    vec2 st=gl_FragCoord.xy/u_resolution;
    
    // float y=pow(st.x,5.0); // 斜めでなく、右下にある程度引っ張られたような線
    // float y=pow(st.x, 20.0); // 斜めでなく、右下に引っ張られたような線
    // float y=pow(st.x, 2.0); // 斜めだが、若干右下に引っ張られた線
    // float y=pow(st.x, 1.0); // ほぼ↑サンプルと同じ、左下→右上斜めの線
    // float y=pow(st.x, 0.0); // 斜めでなく、左上から右上への横一直線、背景も白のみ
    // float y=pow(st.x, 0.2); // 斜めでなく、左上にある程度引っ張られた線
    // float y=pow(st.x, 0.02); // 斜めでなく、左上にかなり程度引っ張られた線
    
    // float y = exp(st.x) - 1.0; // 斜めだが、左上に全体がズレている線
    // float y = log(st.x - 1.0); // 線が存在せず、背景が黒のみ
    float y = sqrt(st.x); // 斜めだが、線が左上にある程度引っ張られた線
    
    vec3 color=vec3(y);
    
    float pct=plot(st,y);
    color=(1.-pct)*color+pct*vec3(0.,1.,0.);
    
    gl_FragColor=vec4(color,1.);
}

// powの指数を変えると見え方が変わる（この値と指数の関係を理解しておくと役立つ）
// ＝この例の様に数学的な関数を様々な場面で用いると、コードを豊かに表現出来る
// ＝データの流れを操れる

// GLSLには多くのネイティブ関数（＝ビルトイン関数）があり、pow()はその一つ
// ★殆どのネイティブ関数はハードウェアのレベルで高速に処理されるので、より速いコードを書ける

// pow(x,y) ... xをy乗した値を返す、xは基数、yは指数という