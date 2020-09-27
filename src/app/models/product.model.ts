export class Product {
    productId: number;
    name: string;
    sku: string;
    image: string;
    editDate: Date;
    sorting: number;
    links: Link[];
}

export class Link {
    href: string;
    rel: string;
    method: string;
}
