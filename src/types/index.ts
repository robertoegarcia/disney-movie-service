export type Movie = {
  id: string;
  title: string;
  releaseDate: string;
  genre: string;
};

export type Request = {
  body: any;
  params: Record<string, string>;
  query: Record<string, string>;
};

export type Response = {
  json: (body: any) => Response;
  status: (code: number) => Response;
};