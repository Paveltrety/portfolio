export interface IFeedItem {
  messageId: number;
  name: string;
  date: string;
  message: string;
}

export interface ICreateFeedItemParams {
  name: string;
  message: string;
}
