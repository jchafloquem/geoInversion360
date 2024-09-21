import {ElementRef, Injectable} from '@angular/core';
import {LayerConfig} from '../interfaces/layerConfig';

//*Libreria de ArcGIS 4.30
import * as projection from '@arcgis/core/geometry/projection';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery.js';
import Color from '@arcgis/core/Color';
import CoordinateConversion from '@arcgis/core/widgets/CoordinateConversion.js';
import Expand from '@arcgis/core/widgets/Expand.js';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer.js';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import Home from '@arcgis/core/widgets/Home.js';
import LabelClass from '@arcgis/core/layers/support/LabelClass.js';
import Legend from '@arcgis/core/widgets/Legend.js';
import Map from '@arcgis/core/Map.js';
import MapView from '@arcgis/core/views/MapView.js';
import Point from '@arcgis/core/geometry/Point';
import PopupTemplate from '@arcgis/core/PopupTemplate.js';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol.js';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer.js';
import SpatialReference from '@arcgis/core/geometry/SpatialReference';
import Zoom from '@arcgis/core/widgets/Zoom.js';

//*Personalizacion <--SimpleFillSymbol-->
const fillSymbolDepartamento = new SimpleFillSymbol({
	color: new Color([255, 255, 255, 0]), // Color rojo con 50% de opacidad
	outline: {
		color: new Color([0, 0, 0]),
		width: 2,
	},
});
const fillSymbolProvincia = new SimpleFillSymbol({
	color: [0, 0, 0, 0], // Color rojo con 50% de opacidad
	outline: {
		color: [0, 255, 0],
		width: 2,
	},
});
const fillSymbolDistrito = new SimpleFillSymbol({
	color: [0, 0, 0, 0], // Color rojo con 50% de opacidad
	outline: {
		color: [255, 0, 0],
		width: 2,
	},
});

//*Personalizacion <--SimpleRenderer-->
const rendererDepartamento = new SimpleRenderer({
	symbol: fillSymbolDepartamento,
});
const rendererProvincia = new SimpleRenderer({
	symbol: fillSymbolProvincia,
});
const rendererDistrito = new SimpleRenderer({
	symbol: fillSymbolDistrito,
});

//*Personalizacion <--PopupTemplate-->
const popuTemplateDepartamento = new PopupTemplate({
	title: '{NOMBDEP}',
	content: [
		{
			type: 'fields',
			fieldInfos: [
				{
					fieldName: 'CODDEP',
					label: 'Codigo',
					visible: true,
				},
			],
		},
	],
});
const popuTemplateProvincia = new PopupTemplate({
	title: '{NOMBPROV}',
	content: [
		{
			type: 'fields',
			fieldInfos: [
				{
					fieldName: 'CODPROV',
					label: 'Codigo',
					visible: true,
				},
			],
		},
	],
});
const popuTemplateDistrito = new PopupTemplate({
	title: '{NOMBDIST}',
	content: [
		{
			type: 'fields',
			fieldInfos: [
				{
					fieldName: 'CODDIST',
					label: 'Codigo',
					visible: true,
				},
			],
		},
	],
});
//*Personalizacion <--LabelClass-->
const labelClassDepartamento = new LabelClass({
	labelExpressionInfo: {expression: '$feature.NOMBDEP'},
	symbol: {
		type: 'text',
		color: 'black',
		haloColor: 'white',
		haloSize: '1px',
		font: {
			size: 10,
			family: 'sans-serif',
			weight: 'bold',
		},
	},
	labelPlacement: 'always-horizontal',
	minScale: 0,
	maxScale: 0,
});
const labelClassProvincia = new LabelClass({
	labelExpressionInfo: {expression: '$feature.NOMBPROV'},
	symbol: {
		type: 'text',
		color: [0, 255, 0],
		haloColor: 'black',
		haloSize: '1px',
		font: {
			size: 10,
			family: 'sans-serif',
			weight: 'bold',
		},
	},
	labelPlacement: 'always-horizontal',
	minScale: 0,
	maxScale: 0,
});
const labelClassDistrito = new LabelClass({
	labelExpressionInfo: {expression: '$feature.NOMBDIST'},
	symbol: {
		type: 'text',
		color: 'red',
		haloColor: 'white',
		haloSize: '1px',
		font: {
			size: 10,
			family: 'sans-serif',
			weight: 'bold',
		},
	},
	labelPlacement: 'always-horizontal',
	minScale: 0,
	maxScale: 0,
});

@Injectable({
	providedIn: 'root',
})
export class GeovisorSharedService {
	public mapa = new Map({basemap: 'topo-vector'});
	public view!: MapView;
	public layerUrls = {
		baseService: 'https://winlmprap09.midagri.gob.pe/winlmprap14/rest/services/ideMidagri',
		limits: {
			departamentos: 'Limites_Censales/MapServer/0',
			provincias: 'Limites_Censales/MapServer/1',
			distritos: 'Limites_Censales/MapServer/2',
		},
	};


	public layers: LayerConfig[] = [
		//*Servicios de capas base
		{
			title: 'LIMITE DE DEPARTAMENTOS',
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.departamentos}`,
			labelingInfo: [labelClassDepartamento],
			popupTemplate: popuTemplateDepartamento,
			renderer: rendererDepartamento,
			visible: true,
			group: 'Límites Censales',
		},
		{
			title: 'LIMITE DE PROVINCIAS',
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.provincias}`,
			labelingInfo: [labelClassProvincia],
			popupTemplate: popuTemplateProvincia,
			renderer: rendererProvincia,
			visible: true,
			group: 'Límites Censales',
		},
		{
			title: 'LIMITE DE DISTRITOS',
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.distritos}`,
			labelingInfo: [labelClassDistrito],
			popupTemplate: popuTemplateDistrito,
			renderer: rendererDistrito,
			visible: true,
			group: 'Límites Censales',
		},
		//*Servicios de capas de informacion


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
			center: [-75.015152, -10.189967],
			zoom: 5.80,
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

	public regionFeature!: FeatureLayer;
	getRegionFeature(): FeatureLayer {
		this.regionFeature = new FeatureLayer({
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.departamentos}`,
			visible: false,
		});
		return this.regionFeature;
	}
	public provinciaFeature!: FeatureLayer;
	getProvinciaFeature(): FeatureLayer {
		this.provinciaFeature = new FeatureLayer({
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.provincias}`,
			visible: false,
		});
		return this.provinciaFeature;
	}
	public distritosFeature!: FeatureLayer;
	getDistritosFeature(): FeatureLayer {
		this.distritosFeature = new FeatureLayer({
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.distritos}`,
			visible: false,
		});
		return this.distritosFeature;
	}

	async removeLayerFromGroup(groupId: string, layerId: string): Promise<void> {
		const groupLayer = this.mapa?.layers.find((layer) => {
			return layer instanceof GroupLayer && layer.id === groupId;
		}) as GroupLayer;
		if (groupLayer) {
			const layerToRemove = groupLayer.findLayerById(layerId);
			if (layerToRemove) {
				groupLayer.remove(layerToRemove);
			}
		}
	}
}
