import { ServiceCardProps } from "../components/service-card/ServiceCard";
import {Services } from "../types/services";

export const serviceCards: Omit<ServiceCardProps, 'countNumber'>[] = [
  {
    id: '11',
    name: Services.MANICURE,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumendaaut consectetur delectus dicta dolorum, eaque eius enim error.',
    bgColor: '#123456',
    textColor: '#FEDCBA',
  },
  {
    id: '12',
    name: Services.PEDICURE,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumendaaut consectetur delectus dicta dolorum, eaque eius enim error.',
    bgColor: '#534567',
    textColor: '#DEFCBA',
  },
  {
    id: '13',
    name: Services.GEL_NAIL_EXTENSION,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumendaaut consectetur delectus dicta dolorum, eaque eius enim error.',
    bgColor: '#456123',
    textColor: '#00FEBA',
  },
  {
    id: '14',
    name: Services.GEL_EXTENSION_REFILL,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumendaaut consectetur delectus dicta dolorum, eaque eius enim error.',
    bgColor: '#341256',
    textColor: '#BADCFE',
  },
  {
    id: '15',
    name: Services.PARAFFIN_TREATMENT,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumendaaut consectetur delectus dicta dolorum, eaque eius enim error.',
    bgColor: '#FF3456',
    textColor: '#000CBA',
  },
  {
    id: '16',
    name: Services.FRENCH,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumendaaut consectetur delectus dicta dolorum, eaque eius enim error.',
    bgColor: '#773456',
    textColor: '#ff9999',
  },
]