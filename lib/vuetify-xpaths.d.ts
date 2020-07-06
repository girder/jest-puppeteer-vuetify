declare type Strings = string | Strings[] | undefined;
export declare const vAvatar: (args?: string | Strings[] | {
    content?: Strings;
    cssClass?: Strings;
} | undefined) => string;
export declare const vBtn: (args?: string | Strings[] | {
    content?: Strings;
    cssClass?: Strings;
} | undefined) => string;
export declare const vCard: (args?: string | Strings[] | {
    content?: Strings;
    cssClass?: Strings;
    title?: Strings;
    actions?: Strings;
} | undefined) => string;
export declare const vChip: (args?: string | Strings[] | {
    content?: Strings;
    cssClass?: Strings;
} | undefined) => string;
export declare const vIcon: (args?: string | Strings[] | {
    icon?: Strings;
    cssClass?: Strings;
} | undefined) => string;
export declare const vListItem: (args?: string | Strings[] | {
    content?: Strings;
    action?: Strings;
    title?: Strings;
    subtitle?: Strings;
} | undefined) => string;
export declare const vListItemTitle: (args?: string | Strings[] | {
    content?: Strings;
    cssClass?: Strings;
} | undefined) => string;
export declare const vTextarea: (args?: string | Strings[] | {
    label?: Strings;
    cssClass?: Strings;
} | undefined) => string;
export declare const vTextField: (args?: string | Strings[] | {
    label?: Strings;
    cssClass?: Strings;
} | undefined) => string;
export declare const vToolbar: (args?: string | Strings[] | {
    content?: Strings;
    cssClass?: Strings;
} | undefined) => string;
export {};
