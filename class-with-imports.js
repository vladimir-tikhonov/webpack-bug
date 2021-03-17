import { ClassWithEval } from './class-with-eval.js';
import { EmptyClassA } from './empty-class-a.js';
import { EmptyClassB } from './empty-class-b.js';

export class ClassWithImports {
    logImports() {
        console.log( EmptyClassA, EmptyClassB, ClassWithEval );
    }
}
