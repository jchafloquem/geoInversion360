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
import Locate from "@arcgis/core/widgets/Locate.js";
import Map from '@arcgis/core/Map.js';
import MapView from '@arcgis/core/views/MapView.js';
import Point from '@arcgis/core/geometry/Point';
import PopupTemplate from '@arcgis/core/PopupTemplate.js';
import SpatialReference from '@arcgis/core/geometry/SpatialReference';
import Zoom from '@arcgis/core/widgets/Zoom.js';

import Search from "@arcgis/core/widgets/Search.js";







const popupPatrimonio = new PopupTemplate({
	title: '{GENERICO}',
	content: [
		{
			type: 'fields',
			fieldInfos: [
				{
					fieldName: 'MODALIDAD',
					label: 'Modalidad',
					visible: true,
				},
				{
					fieldName: 'ESPECIFICO',
					label: 'Especifico',
					visible: true,
				},
				{
					fieldName: 'MES',
					label: 'Mes',
					visible: true,
				},
				{
					fieldName: 'anio',
					label: 'Año',
					visible: true,
				},
				{
					fieldName: 'X',
					label: 'Longitud',
					visible: true,
				},
				{
					fieldName: 'Y',
					label: 'Latitud',
					visible: true,
				},
			],
		},
	],
});
const popupVidCuerSalud = new PopupTemplate({

	title: '{GENERICO}',
	content: [
		{
			type: 'fields',
			fieldInfos: [
				{
					fieldName: 'MODALIDAD',
					label: 'Modalidad',
					visible: true,
				},
				{
					fieldName: 'ESPECIFICO',
					label: 'Especifico',
					visible: true,
				},
				{
					fieldName: 'MES',
					label: 'Mes',
					visible: true,
				},
				{
					fieldName: 'anio',
					label: 'Año',
					visible: true,
				},
				{
					fieldName: 'X',
					label: 'Longitud',
					visible: true,
				},
				{
					fieldName: 'Y',
					label: 'Latitud',
					visible: true,
				},
			],
		},
	],
});
const popupContLibertad = new PopupTemplate({
	title: '{GENERICO}',
	content: [
		{
			type: 'fields',
			fieldInfos: [
				{
					fieldName: 'MODALIDAD',
					label: 'Modalidad',
					visible: true,
				},
				{
					fieldName: 'ESPECIFICO',
					label: 'Especifico',
					visible: true,
				},
				{
					fieldName: 'MES',
					label: 'Mes',
					visible: true,
				},
				{
					fieldName: 'anio',
					label: 'Año',
					visible: true,
				},
				{
					fieldName: 'X',
					label: 'Longitud',
					visible: true,
				},
				{
					fieldName: 'Y',
					label: 'Latitud',
					visible: true,
				},
			],
		},
	],
});
const popupOtrDelitos = new PopupTemplate({
	title: '{GENERICO}',
	content: [
		{
			type: 'fields',
			fieldInfos: [
				{
					fieldName: 'MODALIDAD',
					label: 'Modalidad',
					visible: true,
				},
				{
					fieldName: 'ESPECIFICO',
					label: 'Especifico',
					visible: true,
				},
				{
					fieldName: 'MES',
					label: 'Mes',
					visible: true,
				},
				{
					fieldName: 'anio',
					label: 'Año',
					visible: true,
				},
				{
					fieldName: 'X',
					label: 'Longitud',
					visible: true,
				},
				{
					fieldName: 'Y',
					label: 'Latitud',
					visible: true,
				},
			],
		},
	],
});
const popupRoboAgravado = new PopupTemplate({
	title: '{GENERICO}',
	content: [
		{
			type: 'fields',
			fieldInfos: [
				{
					fieldName: 'MODALIDAD',
					label: 'Modalidad',
					visible: true,
				},
				{
					fieldName: 'ESPECIFICO',
					label: 'Especifico',
					visible: true,
				},
				{
					fieldName: 'MES',
					label: 'Mes',
					visible: true,
				},
				{
					fieldName: 'anio',
					label: 'Año',
					visible: true,
				},
				{
					fieldName: 'X',
					label: 'Longitud',
					visible: true,
				},
				{
					fieldName: 'Y',
					label: 'Latitud',
					visible: true,
				},
			],
		},
	],
});

const clusterConfig = {
	type: "cluster",
	clusterRadius: "100px",
	// {cluster_count} is an aggregate field containing
	// the number of features comprised by the cluster
	popupTemplate: {
	  title: "Cluster summary",
	  content: "This cluster represents {MES} earthquakes.",
	  fieldInfos: [{
		fieldName: "MES",
		format: {
		  places: 0,
		  digitSeparator: true
		}
	  }]
	},
	clusterMinSize: "24px",
	clusterMaxSize: "60px",
	labelingInfo: [{
	  deconflictionStrategy: "none",
	  labelExpressionInfo: {
		expression: "Text($feature.MES, '#,###')"
	  },
	  symbol: {
		type: "text",
		color: "#004a5d",
		font: {
		  weight: "bold",
		  family: "Noto Sans",
		  size: "12px"
		}
	  },
	  labelPlacement: "center-center",
	}]
  };

@Injectable({
	providedIn: 'root',
})
export class GeovisorSharedService {
	public mapa = new Map({basemap: 'topo-vector'});
	public view!: MapView;

	public layerUrls = {
		baseService: 'https://www.idep.gob.pe/geoportal/rest/services',
		limits: {
			departamentos: 'DATOS_GEOESPACIALES/LÍMITES/FeatureServer/3',
			provincias: 'DATOS_GEOESPACIALES/LÍMITES/FeatureServer/4',
			distritos: 'DATOS_GEOESPACIALES/LÍMITES/FeatureServer/5',
		}
	}
	//*Servicio de delitos fuente INEI
	public layerUrlsDelitos = {
		baseServicio: 'https://arcgis3.inei.gob.pe:6443/arcgis/rest/services/Datacrim',
		delito: {
			patrimonio: 'DATACRIM002_AGS_PUNTOSDELITOS/MapServer/45',
			vidaCuerpoSalud : 'DATACRIM002_AGS_PUNTOSDELITOS/MapServer/46',
			contraLibertad : 'DATACRIM002_AGS_PUNTOSDELITOS/MapServer/47',
			otrosDelitos: 'DATACRIM002_AGS_PUNTOSDELITOS/MapServer/48',
		}
	};

	public layerUrlsModalidadDelito = {
		baseServicio: 'https://arcgis3.inei.gob.pe:6443/arcgis/rest/services/Datacrim',
		modalidad: {
			roboAgravado: 'DATACRIM002_AGS_PUNTOSDELITOS/MapServer/242',
			roboAgravadoManoArmada : 'DATACRIM002_AGS_PUNTOSDELITOS/MapServer/243',
			robo : 'DATACRIM002_AGS_PUNTOSDELITOS/MapServer/244',
			hurto: 'DATACRIM002_AGS_PUNTOSDELITOS/MapServer/245',
			hurtoAgravado: 'DATACRIM002_AGS_PUNTOSDELITOS/MapServer/246',
			hurtoVehiculo: 'DATACRIM002_AGS_PUNTOSDELITOS/MapServer/247',
			asaltoRoboVehiculos:'DATACRIM002_AGS_PUNTOSDELITOS/MapServer/248',
			homicidioCalificado:'DATACRIM002_AGS_PUNTOSDELITOS/MapServer/249',
			homicidioConArma:'DATACRIM002_AGS_PUNTOSDELITOS/MapServer/250',
			hurtoAgravadoEnCasa:'DATACRIM002_AGS_PUNTOSDELITOS/MapServer/251',
			roboFustrado:'DATACRIM002_AGS_PUNTOSDELITOS/MapServer/252',
			roboAgravadoNoche:'DATACRIM002_AGS_PUNTOSDELITOS/MapServer/253',
			microcomercializacionDrogas:'DATACRIM002_AGS_PUNTOSDELITOS/MapServer/254',
			hurtoFustrado:'DATACRIM002_AGS_PUNTOSDELITOS/MapServer/255',
			estafasDefraudaciones:'DATACRIM002_AGS_PUNTOSDELITOS/MapServer/256'
		}
	};
	public layers: LayerConfig[] = [
		//*Servicios de capas base
		{
			title:'ESTAFA Y OTRAS DEFRAUDACIONES',
			url: `${this.layerUrlsModalidadDelito.baseServicio}/${this.layerUrlsModalidadDelito.modalidad.estafasDefraudaciones}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: true,
			geometryType: "point",
			featureReduction: {
				type: "cluster",
				clusterRadius: 100,
			},
			group:'MODALIDAD DE DELITO 2023'
		},
		{
			title:'HURTO FRUSTRADO',
			url: `${this.layerUrlsModalidadDelito.baseServicio}/${this.layerUrlsModalidadDelito.modalidad.hurtoFustrado}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			geometryType: "point",
			group:'MODALIDAD DE DELITO 2023'
		},
		{
			title:'MICROCOMERCIALIZACION DE DROGAS',
			url: `${this.layerUrlsModalidadDelito.baseServicio}/${this.layerUrlsModalidadDelito.modalidad.microcomercializacionDrogas}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			geometryType: "point",
			group:'MODALIDAD DE DELITO 2023'
		},
		{
			title:'ROBO AGRAVADO DURANTE LA NOCHE O EN LUGAR DESOLADO',
			url: `${this.layerUrlsModalidadDelito.baseServicio}/${this.layerUrlsModalidadDelito.modalidad.roboAgravadoNoche}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			geometryType: "point",
			group:'MODALIDAD DE DELITO 2023'
		},
		{
			title:'ROBO FRUSTRADO',
			url: `${this.layerUrlsModalidadDelito.baseServicio}/${this.layerUrlsModalidadDelito.modalidad.roboFustrado}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			geometryType: "point",
			group:'MODALIDAD DE DELITO 2023'
		},
		{
			title:'HURTO AGRAVADO EN CASA HABITADA',
			url: `${this.layerUrlsModalidadDelito.baseServicio}/${this.layerUrlsModalidadDelito.modalidad.hurtoAgravadoEnCasa}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			geometryType: "point",
			group:'MODALIDAD DE DELITO 2023'
		},
		{
			title:'HOMICIDIO POR ARMA DE FUEGO',
			url: `${this.layerUrlsModalidadDelito.baseServicio}/${this.layerUrlsModalidadDelito.modalidad.homicidioConArma}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			geometryType: "point",
			group:'MODALIDAD DE DELITO 2023'
		},
		{
			title:'HOMICIDIO CALIFICADO - ASESINATO',
			url: `${this.layerUrlsModalidadDelito.baseServicio}/${this.layerUrlsModalidadDelito.modalidad.homicidioCalificado}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			geometryType: "point",
			group:'MODALIDAD DE DELITO 2023'
		},
		{
			title:'ASALTO Y ROBO DE VEHICULOS',
			url: `${this.layerUrlsModalidadDelito.baseServicio}/${this.layerUrlsModalidadDelito.modalidad.asaltoRoboVehiculos}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			geometryType: "point",
			group:'MODALIDAD DE DELITO 2023'
		},
		{
			title:'HURTO DE VEHICULO',
			url: `${this.layerUrlsModalidadDelito.baseServicio}/${this.layerUrlsModalidadDelito.modalidad.hurtoVehiculo}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			geometryType: "point",
			group:'MODALIDAD DE DELITO 2023'
		},
		{
			title:'HURTO AGRAVADO',
			url: `${this.layerUrlsModalidadDelito.baseServicio}/${this.layerUrlsModalidadDelito.modalidad.hurtoAgravado}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			geometryType: "point",
			group:'MODALIDAD DE DELITO 2023'
		},
		{
			title:'HURTO',
			url: `${this.layerUrlsModalidadDelito.baseServicio}/${this.layerUrlsModalidadDelito.modalidad.hurto}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			geometryType: "point",
			group:'MODALIDAD DE DELITO 2023'
		},
		{
			title:'ROBO',
			url: `${this.layerUrlsModalidadDelito.baseServicio}/${this.layerUrlsModalidadDelito.modalidad.robo}`,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			geometryType: "point",
			group:'MODALIDAD DE DELITO 2023'
		},
		{
			title:'ROBO AGRAVADO A MANO ARMADA',
			url: `${this.layerUrlsModalidadDelito.baseServicio}/${this.layerUrlsModalidadDelito.modalidad.roboAgravadoManoArmada}`,
			popupTemplate: popupRoboAgravado,
			renderer: undefined,
			visible: false,
			geometryType: "point",
			group:'MODALIDAD DE DELITO 2023'
		},
		{
			title:'ROBO AGRAVADO',
			url: `${this.layerUrlsModalidadDelito.baseServicio}/${this.layerUrlsModalidadDelito.modalidad.roboAgravado}`,
			popupTemplate: popupRoboAgravado,
			renderer: undefined,
			visible: false,
			geometryType: "point",
			group:'MODALIDAD DE DELITO 2023'
		},
		//*Capas de Otros delitos
		{
			title:'OTROS DELITOS',
			url: `${this.layerUrlsDelitos.baseServicio}/${this.layerUrlsDelitos.delito.otrosDelitos}`,
			popupTemplate: popupOtrDelitos,
			renderer: undefined,
			visible: false,
			geometryType: "point",
			group:'DELITOS GENERICOS 2023'
		},
		{
			title:'CONTRA LA LIBERTAD',
			url: `${this.layerUrlsDelitos.baseServicio}/${this.layerUrlsDelitos.delito.contraLibertad}`,
			popupTemplate: popupContLibertad,
			renderer: undefined,
			visible: false,
			geometryType: "point",
			group:'DELITOS GENERICOS 2023'
		},
		{
			title:'LA VIDA, CUERPO Y SALUD',
			url: `${this.layerUrlsDelitos.baseServicio}/${this.layerUrlsDelitos.delito.vidaCuerpoSalud}`,
			popupTemplate: popupVidCuerSalud,
			renderer: undefined,
			visible: false,
			geometryType: "point",
			group:'DELITOS GENERICOS 2023'
		},
		{
			title:'CONTRA EL PATRIMONIO',
			url: `${this.layerUrlsDelitos.baseServicio}/${this.layerUrlsDelitos.delito.patrimonio}`,
			popupTemplate: popupPatrimonio,
			renderer: undefined,
			visible: false,
			geometryType: "point",
			group:'DELITOS GENERICOS 2023'
		},
		{
			title: 'DISTRITOS',
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.distritos}`,
			labelingInfo: undefined,
			popupTemplate: undefined,
			renderer: undefined,
			visible: true,
			group: 'LIMITES POLITICOS',
		},
		{
			title: 'PROVINCIAS',
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.provincias}`,
			labelingInfo: undefined,
			popupTemplate: undefined,
			renderer: undefined,
			visible: true,
			labelsVisible: false,
			group: 'LIMITES POLITICOS',
		},
		{
			title: 'DEPARTAMENTOS',
			url: `${this.layerUrls.baseService}/${this.layerUrls.limits.departamentos}`,
			labelingInfo: undefined,
			popupTemplate: undefined,
			renderer: undefined,
			visible: false,
			labelsVisible: false,
			group: 'LIMITES POLITICOS',
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
					featureReduction:layerConfig.featureReduction


				});
			}
			else if (layerConfig.popupTemplate && layerConfig.renderer == undefined) {
				featureLayer = new FeatureLayer({
					url: layerConfig.url,
					title: layerConfig.title,
					popupTemplate: layerConfig.popupTemplate,
					labelsVisible: layerConfig.labelsVisible,
					visible: layerConfig.visible,
					featureReduction:layerConfig.featureReduction
				});
			}
			else if (layerConfig.popupTemplate && layerConfig.renderer && layerConfig.labelingInfo == undefined) {
				featureLayer = new FeatureLayer({
					url: layerConfig.url,
					title: layerConfig.title,
					popupTemplate: layerConfig.popupTemplate,
					renderer: layerConfig.renderer,
					visible: layerConfig.visible,
					labelsVisible: layerConfig.labelsVisible,
					featureReduction:layerConfig.featureReduction
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
					labelsVisible: layerConfig.labelsVisible,
					featureReduction:layerConfig.featureReduction
				});
			}
			this.mapa.add(featureLayer);
		});
		//*Creacion de la Vista del Mapa
		const view = new MapView({
			container: container,
			map: this.mapa,
			center: [-77.02824, -12.04318],
			zoom: 11.5,
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
		view.ui.add(new Search({
			view,
			allPlaceholder:'Buscar direccion',
			label:'Buscar',
			locationEnabled:true,
			maxResults:5,

		}),
			{position:'top-right', index:0})
		view.ui.add(new Zoom({view}),{position:'top-right',index:1});
		view.ui.add(new Home({view }), {position:'top-right',index:2});
		view.ui.add(new Locate({view, icon:'gps-on-f'}),{position:'top-right', index:3});

		view.ui.add(new Expand({view, expandTooltip:'Galeria de Mapas Base', content: new BasemapGallery({view, icon:'move-to-basemap'})}), {position:'top-right', index:4});





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


}
