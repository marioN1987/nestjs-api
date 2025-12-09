import { IsString, IsNumber, IsOptional, IsUrl, IsArray, IsDateString } from "class-validator";

export class StreamingContentDto {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsUrl()
  thumbnail_url: string;

  @IsUrl()
  video_url: string;

  @IsNumber()
  year: number;

  @IsString()
  genre: string;

  @IsNumber()
  rating: number;

  @IsNumber()
  duration: number;

  @IsArray()
  @IsString({ each: true })
  cast: string[];

  @IsOptional()
  @IsNumber()
  watch_progress?: number;

  @IsDateString()
  created_at: string;
}