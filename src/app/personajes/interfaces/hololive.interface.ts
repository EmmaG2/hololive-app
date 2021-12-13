export interface Vtuber {
    id?:         string;
    vtuber:     VtuberClass;
    publisher:  string;
    generation: string[];
    alt_img?:   string;
}

export interface VtuberClass {
    name: Name;
}

export interface Name {
    en: string;
    jp: string;
}
