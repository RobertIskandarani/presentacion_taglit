export interface CardProps {
    id?: number;
    backgroundColor?: string;
    title: string;
    icon: 'sun' | 'moon' | 'stars';
    onClick?: () => void;
}

export interface DescriptionCardProps {
    id?: number;
    backgroundColor?: string;
    title: string;
    src: string;
}