import D3Component from 'idyll-d3-component';
import * as d3 from 'd3';
import './custom-d3-component.scss';

const size = 600;

export default class Index extends D3Component {
  initialize(node /* , props */) {
    this.svg = d3.select(node).append('svg');
    this.svg.attr('viewBox', `0 0 ${size} ${size}`)
      .style('width', '100%')
      .style('height', 'auto');

    this.svg.append('circle')
      .attr('r', 20)
      .attr('cx', Math.random() * size)
      .attr('cy', Math.random() * size);
  }

  update(props, oldProps) {
    const { state: oldState, radius: oldRadius } = oldProps;
    const { radius = oldRadius, state } = props;
    if (oldState !== state) {
      this.svg.selectAll('circle')
        .transition()
        .duration(750)
        .attr('cx', Math.random() * size)
        .attr('cy', Math.random() * size);
      return;
    }
    this.svg.selectAll('circle')
      .attr('r', radius);
  }
}
