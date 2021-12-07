import 'styled-components';

declare module 'styled-components' {

    interface DesignSystem {
        green: string,    
        dark_green: string, 
    
        black: string,
        dark_gray: string, 
        gray: string,
        light_gray: string,
        lightest_gray: string,

        detail: string,
        background: string,
    }


    export interface DefaultTheme {
        title: string,
        colors: DesignSystem
    }
}