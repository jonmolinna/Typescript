import { Weather, Visibility } from "./enums";

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">;

export type NewDiaryEntry = Omit<DiaryEntry, "id">;

// Pick te permite usar solo algunos datos de DiaryEntry
export type NonSensitiveInfoDiaryEntry2 = Pick<
  DiaryEntry,
  "id" | "date" | "weather" | "visibility"
>;
