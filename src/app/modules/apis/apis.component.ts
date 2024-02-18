

import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
})
export class APIsComponent implements OnInit {
  apis: any[] = [];
  formData: any = {};

  constructor(private apiDataService: ApiDataService) {}

  ngOnInit(): void {
    this.loadAPIs();
  }

  onSubmit(): void {

    // Obter os valores do formulário e adicioná-los à lista de APIs
    const newApi = {
      exchange: this.formData.exchange,
      apiType: this.formData.apiType,
      baseAPI: this.formData.baseAPI,
      endPoint: this.formData.endPoint,
      inUse: this.formData.inUse || false, // Padrão para false se não estiver definido
      date: this.formData.date,
    };

    this.apis.push(newApi);

    // Salvar a lista atualizada no arquivo JSON
    this.apiDataService.saveAPIs(this.apis);

    // Limpar o formulário
    this.clearForm();
  }

  private loadAPIs(): void {
    this.apiDataService.getAPIs().subscribe((data) => {
      this.apis = data;
    });
  }

  private clearForm(): void {
    this.formData = {};
  }
}
