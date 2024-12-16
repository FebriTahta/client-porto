export interface ProfileInterface {
    id: string;
    name: string;
    nickName: string;
    desc: string;
    photo: File | string | null; // Mendukung URL, file, atau null
}