create table categories (
    id uuid primary key default gen_random_uuid(),
    name varchar(100) not null,
    description varchar(255),
    icon varchar(10),
    display_order integer not null,
    active boolean not null default true,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);

create table products (
    id uuid primary key default gen_random_uuid(),
    category_id uuid not null,
    title varchar(150) not null,
    description varchar(500),
    price numeric(10, 2) not null,
    image varchar(255),
    available boolean not null default true,
    active boolean not null default true,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now(),

    constraint fk_products_category
        foreign key (category_id)
        references categories(id)
);