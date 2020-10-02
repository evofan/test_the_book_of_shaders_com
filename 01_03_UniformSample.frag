#ifdef GL_ES
precision mediump float;
#endif

// uniform変数の指定（型付きで指定する）
uniform float u_time;// ロードしてからの経過秒

void main(){
    gl_FragColor=vec4(abs(sin(u_time)),0.,0.,1.);
    // gl_FragColor = vec4(abs(sin(u_time))*1.5, abs(sin(u_time)), sin(u_time), 1.0);
}

// The Book of Shadersのインラインの中でしか動かない、
// 又はglsl-canvas（CTRL + SHIFT + P → Show glslCanvas）
