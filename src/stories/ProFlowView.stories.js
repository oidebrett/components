import ProFlowView from "../components/ProFlowView";

const nodes = [
  {
    id: 'a1',
    data: {
      title: 'XXX_API_a1',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      description: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'a2',
    data: {
      title: 'XXX_API_a2',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      description: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'a3',
    data: {
      title: 'XXX_API_a3',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      description: 'XXX_XXX_XXX_API',
    },
  },
];
const edges = [
  {
    id: 'a1-a2',
    source: 'a1',
    target: 'a2',
  },
  {
    id: 'a1-a3',
    source: 'a1',
    target: 'a3',
    type: 'radius',
  },
];

export default {
  title: "ProFlowView",
  component: ProFlowView,
}

export const Default = {
  args: {
    //👇 The args you need here will depend on your component
    nodes: nodes,
    edges: edges,
  },
};