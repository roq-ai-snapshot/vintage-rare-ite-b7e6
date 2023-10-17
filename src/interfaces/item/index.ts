import { InventoryInterface } from 'interfaces/inventory';
import { OrderItemInterface } from 'interfaces/order-item';
import { VendorInterface } from 'interfaces/vendor';
import { GetQueryInterface } from 'interfaces';

export interface ItemInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  vendor_id: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  order_item?: OrderItemInterface[];
  vendor?: VendorInterface;
  _count?: {
    inventory?: number;
    order_item?: number;
  };
}

export interface ItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  vendor_id?: string;
}
