#ifdef GL_ES
precision mediump float;
#endif

// uniform変数の指定（型付きで指定する）
uniform vec2 u_resolution; // Canvas size (width, height)
uniform vec2 u_mouse; // マウス座標、スクリーンピクセル内
uniform float u_time; // ロードしてからの経過秒

// 変数名は実装次第で変わるが、この本では一貫してu_time, u_mouse, u_resolutionを使用
// uniform変数の名前はu_で始めるという慣例に従っているが、他の場所では違う命名規則もあり、自由に付けられる。
// ↓例(ShaderToy.com)：

uniform vec3 iResolution;   // viewport resolution (in pixels)
uniform vec4 iMouse;        // mouse pixel coords. xy: current, zw: click
uniform float iTime;        // shader playback time (in seconds)

