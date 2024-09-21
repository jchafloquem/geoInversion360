import PopupTemplate from '@arcgis/core/PopupTemplate';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer.js';
import LabelClass from '@arcgis/core/layers/support/LabelClass.js';

export interface LayerConfig {
	group: string; //* Agrupación de capas
	labelingInfo?: [LabelClass];
	maxScale?: number;
	minScale?: number;
	outFields?: string[];
	popupTemplate?: PopupTemplate;
	renderer?: SimpleRenderer;
	title: string;
	url: string;
	visible: boolean;
}
