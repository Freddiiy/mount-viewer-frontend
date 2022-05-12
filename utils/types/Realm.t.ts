export interface IRealm {
    _links: Links;
    realms: Realm[];
}

export interface Links {
    self: Self;
}

export interface Self {
    href: string;
}

export interface Realm {
    key:  Self;
    name: string;
    id:   number;
    slug: string;
}
