import { HttpParams } from '@angular/common/http';
import { Table } from 'primeng/primeng';

export class DateUtil {

    static toDate = (dateStr): Date => {
      const parts = dateStr.split('-');
      return new Date(parts[0], parts[1] - 1, parts[2]);
    }

    static getAnoAtual = (): number => {
      return new Date().getFullYear();
    }
}
