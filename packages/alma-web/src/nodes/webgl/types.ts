export enum WebGLNodeType {
    WEBGL_CONTEXT = 'WEBGL_CONTEXT',
    SIMPLEX_NOISE = 'SIMPLEX_NOISE',
    SINE = 'SINE',
    MODULO = 'MODULO',
    TIME = 'TIME',
    UV = 'UV',
    VECTOR_2 = 'VECTOR_2'
}

export interface ClassConstructor<T> {
    new (...args: any[]): T;
}
