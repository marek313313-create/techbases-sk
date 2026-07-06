import type { Metadata } from 'next';
import { PlaceholderNotePage } from '../placeholder-note-page';

const title = 'Prečo údržba aj pri ERP stále hľadá dáta v Exceli';

export const metadata: Metadata = {
  title: {
    absolute: `${title} | TechBases.sk`,
  },
  description:
    'Poznámka sa pripravuje: ERP exporty, Excel, údržba a ručné dohľadávanie prevádzkových odpovedí.',
  alternates: {
    canonical: '/poznamky/erp-data-excel-udrzba',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ErpDataExcelMaintenanceNotePage() {
  return <PlaceholderNotePage title={title} />;
}
