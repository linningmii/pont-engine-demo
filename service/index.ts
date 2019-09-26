import { defs as apiDefs, api } from './api';

(window as any).defs = {
  api: apiDefs,
};
(window as any).API = {
  api,
};
