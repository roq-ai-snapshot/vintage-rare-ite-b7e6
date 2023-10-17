import { ItemInterface } from 'interfaces/item';
import { VendorInterface } from 'interfaces/vendor';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  item_id: string;
  quantity: number;
  vendor_id: string;
  created_at?: any;
  updated_at?: any;

  item?: ItemInterface;
  vendor?: VendorInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  item_id?: string;
  vendor_id?: string;
}
