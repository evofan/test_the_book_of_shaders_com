#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

/*
uniform vec2 u_resolution;
uniform float u_time;

float plot(vec2 st,float pct){
    return smoothstep(pct-.02,pct,st.y)-smoothstep(pct,pct+.02,st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    
    // 値が0.5を超えない限り、Stepは0.0を返します。
    // その場合(0.5を超えた場合？)、1.0を返します。
    // float y = step(0.5, st.x); // 0.5未満が黒、超えたら白
    // float y = step(0.2, st.x); // 0.2未満が黒、超えたら白
    float y = step(0.9, st.x); // 0.9未満が黒
    
    vec3 color = vec3(y);
    
    float pct = plot(st,y);
    color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);
    
    gl_FragColor = vec4(color, 1.0);
    
}

// step()関数は2つのパラメータを受け取る、1つ目は境界又は閾値、
// 2つ目はこの関数によってチェックされる値
// 境界より小さい値には0.0を返し、境界以上の値には1.0を返す

*/

uniform vec2 u_resolution;
uniform float u_time;

float plot(vec2 st,float pct){
    return smoothstep(pct-.02,pct,st.y)-smoothstep(pct,pct+.02,st.y);
}

void main(){
    vec2 st=gl_FragCoord.xy/u_resolution;
    
    // 0.1と0.9の間のスムーズな補間
    float y=smoothstep(.1,.8,st.x);
    
    // float y = smoothstep(0.2, 0.5, st.x) - smoothstep(0.5, 0.8, st.x);
    // ↑はこの山型の描画を垂直に切った断面に近い。
    // ※引き算の前か後ろだけで描画するともう少し極端な線の描画になる
    
    vec3 color=vec3(y);
    
    float pct=plot(st,y);
    color=(1.-pct)*color+pct*vec3(0.,1.,0.);
    
    gl_FragColor=vec4(color,1.);
    
}
