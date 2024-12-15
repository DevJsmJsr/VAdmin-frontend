export interface ListVehiclesResponse {
  pk: string;
  number_plate: string;
  model: string;
  brand: string;
  type_vehicle: string;
  color: string;
  doors_number: string;
  fuel_type: string;
  kilometric: string;
  property_card_id: string;
  initial_scan: string;
  property_card: {
    person:{ 
      document_type: string,
      document_number: string
    }
  }
}