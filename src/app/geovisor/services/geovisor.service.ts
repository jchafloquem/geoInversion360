import {ElementRef, Injectable} from '@angular/core';
import {LayerConfig} from '../interfaces/layerConfig';

//*Libreria de ArcGIS 4.30
import * as projection from '@arcgis/core/geometry/projection';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery.js';
import CoordinateConversion from '@arcgis/core/widgets/CoordinateConversion.js';
import Expand from '@arcgis/core/widgets/Expand.js';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer.js';
import Home from '@arcgis/core/widgets/Home.js';
import Legend from '@arcgis/core/widgets/Legend.js';
import Map from '@arcgis/core/Map.js';
import MapView from '@arcgis/core/views/MapView.js';
import Point from '@arcgis/core/geometry/Point';
import SpatialReference from '@arcgis/core/geometry/SpatialReference';
import Zoom from '@arcgis/core/widgets/Zoom.js';





@Injectable({
	providedIn: 'root',
})
export class GeovisorSharedService {

	public mapa = new Map({basemap: 'topo-vector'});

	public view!: MapView;

	public layerUrls = {
		baseService: 'https://services8.arcgis.com/tPY1NaqA2ETpJ86A/arcgis/rest/services',
		limits: {
			provincia: 'LM_Limites/FeatureServer/0',
			lmetropolitana: 'LM_Limites/FeatureServer/1',
			unidAnalisis: 'LM_Limites/FeatureServer/2',
			rios: 'LM_Limites/FeatureServer/4',
			puertos: 'LM_Limites/FeatureServer/29',
			peligNaturales: 'LM_Limites/FeatureServer/28',
			peligAccionHumana: 'LM_Limites/FeatureServer/21',
			canales: 'LM_Limites/FeatureServer/20',

			vias_acc_transito: 'LM_Limites/FeatureServer/19',
			vias_prin_truncas: 'LM_Limites/FeatureServer/18',
			vias_congestionadas: 'LM_Limites/FeatureServer/17',
			vias_actual: 'LM_Limites/FeatureServer/16',
			vias_trans_public: 'LM_Limites/FeatureServer/15',

			ambito: 'LM_Limites/FeatureServer/14',

		},
	};


	public layers: LayerConfig[] = [
		//*Servicios de capas base
		{
			title: 'AMBITO DE INTERVENCION',
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.ambito}`,
			//labelingInfo: [],
			popupTemplate: undefined,
			renderer: undefined,
			visible: true,
			group: 'LIMITES',
		},
		{
			title: 'LIMITE DE PROVINCIAS',
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.provincia}`,
			//labelingInfo: [],
			popupTemplate: undefined,
			renderer: undefined,
			visible: true,
			group: 'LIMITES',
		},
		{
			title:'LIMA METROPOLITANA',
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.lmetropolitana}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			group:'LIMITES'
		},
		{
			title:'UNIDAD DE ANALISIS',
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.unidAnalisis}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			group:'LIMITES'
		},
		{
			title: 'RIOS',
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.rios}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: true,
			group: 'HIDROGRAFIA',
		},
		{
			title: 'CANALES',
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.canales}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: true,
			group: 'HIDROGRAFIA',
		},
		{
			title: 'ESTRUCTURA ECOLOGICA',
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.puertos}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			group: 'ESTRUCTURA',
		},
		{
			title: 'SINTESIS DE PELIGROS NATURALES',
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.peligNaturales}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			group: 'PELIGROS',
		},
		{
			title: 'PELIGROS POR ACCION HUMANA',
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.peligAccionHumana}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			group: 'PELIGROS',
		},
		{
			title: 'MUERTE POR ACCIDENTE DE TRANSITO',
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.vias_acc_transito}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			group: 'VIAS',
		},
		{
			title: 'PRINCIPALES TRUNCAS',
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.vias_prin_truncas}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			group: 'VIAS',
		},
		{
			title: 'CONGESTIONADAS',
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.vias_congestionadas}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			group: 'VIAS',
		},





	];

	public lis: [] = [];
	public searchTerm = '';
	public filteredArray: [] = [];
	//* Footer coordenadas
	public gcsLongitude = '--';
	public gcsLatitude = '--';
	public utmZone = '--';
	public utmEast = '--';
	public utmNorth = '--';
	public scale = '--';
	public legend!: Legend;

	constructor() {}

	initializeMap(mapViewEl: ElementRef): Promise<void> {
		const container = mapViewEl.nativeElement;
		this.layers.forEach((layerConfig) => {
			let featureLayer;
			if (layerConfig.popupTemplate == undefined) {
				featureLayer = new FeatureLayer({
					url: layerConfig.url,
					title: layerConfig.title,
					visible: layerConfig.visible,
					outFields: layerConfig.outFields,
				});
			}
			else if (layerConfig.popupTemplate && layerConfig.renderer == undefined) {
				featureLayer = new FeatureLayer({
					url: layerConfig.url,
					title: layerConfig.title,
					popupTemplate: layerConfig.popupTemplate,
					visible: layerConfig.visible,
				});
			}
			else if (layerConfig.popupTemplate && layerConfig.renderer && layerConfig.labelingInfo == undefined) {
				featureLayer = new FeatureLayer({
					url: layerConfig.url,
					title: layerConfig.title,
					popupTemplate: layerConfig.popupTemplate,
					renderer: layerConfig.renderer,
					visible: layerConfig.visible,
				});
			}
			else {
				featureLayer = new FeatureLayer({
					url: layerConfig.url,
					title: layerConfig.title,
					popupTemplate: layerConfig.popupTemplate,
					labelingInfo: layerConfig.labelingInfo,
					outFields: layerConfig.outFields,
					visible: layerConfig.visible,
					renderer: layerConfig.renderer,
					maxScale: layerConfig.maxScale,
					minScale: layerConfig.minScale,
				});
			}
			this.mapa.add(featureLayer);
		});
		//*Creacion de la Vista del Mapa
		const view = new MapView({
			container: container,
			map: this.mapa,
			center: [-77.02824, -12.04318],
			zoom: 10.0,
			rotation: 0,
			constraints: {
				maxZoom: 25,
				minZoom: 1,
				snapToZoom: false,
			},
			padding: {top: 0},
			ui: {
				components: [],
			},
		});
		//*Escala del Mapa
		view.watch('scale', (scale) => {
			this.scale = this.formatScale(scale);
		});

		//CONTROLES DE FUNCION DEL MAPA (LADO DERECHO)
		view.ui.add(new Home({view}), {position:'top-right',index:0});
		view.ui.add(new Zoom({view}),{position:'top-right',index:1});
		view.ui.add(new Expand({view, expandTooltip:'Galeria de Mapas Base', content: new BasemapGallery({view, icon:'move-to-basemap'})}), {position:'top-right', index:2})
		this.legend = new Legend({view, container: document.createElement('div')});
		new CoordinateConversion({view });
		view.on('pointer-move', (event: {x: number; y: number}) => {
			const point = this.view.toMap({x: event.x, y: event.y});
			this.updateCoordinates(point.latitude, point.longitude);
		}); this.view = view;
		 return this.view.when();
	} //*Fin <initializeMap>
	//*Inicio del Toogle
	toggleLayerVisibility(layerTitle: string, visibility: boolean): void {
		const layer = this.mapa.layers.find((layer) => layer.title === layerTitle);
		if (layer) {
			layer.visible = visibility;
		}
	} //*Fin de toggleLayerVisibility

	//*Inicio carga de capa
	getLayerVisibility(layerTitle: string): boolean {
		const layer = this.mapa.layers.find((layer) => layer.title === layerTitle);
		return layer ? layer.visible : false;
	}

	private capas: Record<string, FeatureLayer> = {};
	getActiveLayers(): FeatureLayer[] {
		return Object.values(this.capas).filter((layer) => layer.visible);
	}

	updateCoordinates(lat: number, lon: number): void {
		this.gcsLongitude = lon.toFixed(5);
		this.gcsLatitude = lat.toFixed(5);
		// Calculate UTM Zone
		const zoneNumber = Math.floor((lon + 180) / 6) + 1;
		const utmBand = this.getUtmBand(lat);
		this.utmZone = `${zoneNumber} ${utmBand}`;

		// Convert to UTM
		const pointUTM = new Point({
			latitude: lat,
			longitude: lon,
			spatialReference: SpatialReference.WGS84,
		});
		const utmWkid = lat >= 0 ? 32600 + zoneNumber : 32700 + zoneNumber; // WKID for UTM zone
		const projected = projection.project(pointUTM, new SpatialReference({wkid: utmWkid})) as Point;

		const utmPoint = projected as Point;
		this.utmEast = `${utmPoint.x.toLocaleString('en-US', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		})} m`;
		this.utmNorth = `${utmPoint.y.toLocaleString('en-US', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		})} m`;
	}

	getUtmBand(latitude: number): string {
		const bands = 'CDEFGHJKLMNPQRSTUVWX'; // Bands from 80S to 84N
		const index = Math.floor((latitude + 80) / 8);
		return bands.charAt(index);
	}

	formatScale(scale: number): string {
		return scale.toLocaleString('en-US', {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
	}

	// public regionFeature!: FeatureLayer;
	// getRegionFeature(): FeatureLayer {
	// 	this.regionFeature = new FeatureLayer({
	// 		url: `${this.layerUrls.baseService}/${this.layerUrls.limits.provincia}`,
	// 		visible: false,
	// 	});
	// 	return this.regionFeature;
	// }
	// public provinciaFeature!: FeatureLayer;
	// getProvinciaFeature(): FeatureLayer {
	// 	this.provinciaFeature = new FeatureLayer({
	// 		url: `${this.layerUrls.baseService}/${this.layerUrls.limits.lmetropolitana}`,
	// 		visible: false,
	// 	});
	// 	return this.provinciaFeature;
	// }
	// public distritosFeature!: FeatureLayer;
	// getDistritosFeature(): FeatureLayer {
	// 	this.distritosFeature = new FeatureLayer({
	// 		url: `${this.layerUrls.baseService}/${this.layerUrls.limits.unidAnalisis}`,
	// 		visible: false,
	// 	});
	// 	return this.distritosFeature;
	// }

	// async removeLayerFromGroup(groupId: string, layerId: string): Promise<void> {
	// 	const groupLayer = this.mapa?.layers.find((layer) => {
	// 		return layer instanceof GroupLayer && layer.id === groupId;
	// 	}) as GroupLayer;
	// 	if (groupLayer) {
	// 		const layerToRemove = groupLayer.findLayerById(layerId);
	// 		if (layerToRemove) {
	// 			groupLayer.remove(layerToRemove);
	// 		}
	// 	}
	// }
}
