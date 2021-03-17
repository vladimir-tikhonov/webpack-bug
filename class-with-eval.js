import { ClassWithImports } from './class-with-imports.js';

export class ClassWithEval {
    doEval() {
        eval( "console.log( 1 )" );
    }

    logImports() {
        console.log( ClassWithImports );
    }
}
