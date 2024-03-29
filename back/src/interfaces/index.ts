import { Request, Response } from "express";

export type ControllerType = {
  [key: string]: (req: Request, res: Response) => Promise<void>;
};

export type PurchasingData = {
  id: number;
  create_time: string | undefined;
  purchasedAmount: string | undefined;
  purchasedCurrency: string | undefined;
  status: string | undefined;
  payer_id: string | undefined;
  payer_name: string | undefined;
  prenom: string | undefined;
  nom: string | undefined;
  email_adress: string | undefined;
  address: string | undefined;
  date: string | undefined;
  hour: string | undefined;
  prestationName: string | undefined;
  prestationDuration: number | undefined;
  prestationPrice: number | undefined;
  telephone: string | undefined;
  instagram: string | undefined;
  whatsapp: string | undefined;
};
