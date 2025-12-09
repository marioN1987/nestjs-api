import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('streaming_content')
export class StreamingContentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    thumbnail_url: string;

    @Column()
    video_url: string;

    @Column()
    year: number;

    @Column()
    genre: string;

    @Column()
    rating: number;

    @Column()
    duration: number;

    @Column()
    cast: string;

    @Column()
    watch_progress?: number;

    @Column()
    created_at: string;
}