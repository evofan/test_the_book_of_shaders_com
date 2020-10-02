#ifdef GL_ES
precision mediump float;
#endif

// uniform変数の指定（型付きで指定する）
uniform vec2 u_resolution; // Canvas size (width, height)
uniform vec2 u_mouse; // マウス座標、スクリーンピクセル内
uniform float u_time; // ロードしてからの経過秒

void main() {
    // vec2 st = gl_FragCoord.xy / u_resolution; // フラグメントの座標を描画領域の全体で割る事によって正規化している
    vec2 st = gl_FragCoord.xy / u_mouse; // マウス座標で移動版
    gl_FragColor = vec4(st.x, st.y, 0.0, 1.0);
}

// シェーダーの世界ではデバッグに使える手段が限られているので、判別し易い色を変数の値に割り当てるのは数少ないその手段の一つ
