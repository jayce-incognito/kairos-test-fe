export interface IProps {}

export interface IDescSectionItem {
    desc: string;
    btnDesc: string;
}
export interface ISectionItem {
    id: string;
    title?: string;
    icon: string;
    titleContent: string;
    descContents: IDescSectionItem[];
}

export interface IHomeLanguage {
    sectionFactories: ISectionItem[];
}
