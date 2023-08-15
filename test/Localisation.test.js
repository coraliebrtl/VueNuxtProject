import { mount } from '@vue/test-utils';
import ListBlock from '@/components/Localisation/ListBlock.vue';

describe('ListBlock.vue', () => {
  it('should display an empty message when its null', () => {
    const wrapper = mount(ListBlock, {
      propsData: {
        storedData: null,
      },
    });

    expect(wrapper.text()).toContain('No data available.');
  });

  it('should display an empty message when there is 0 address', () => {
    const wrapper = mount(ListBlock, {
      propsData: {
        storedData: [],
      },
    });

    expect(wrapper.text()).toContain('No data available.');
  });

  it('should display an empty message when there is 0 address', () => {
    const wrapper = mount(ListBlock, {
      propsData: {
        storedData: [
            {
               "type":"Feature",
               "geometry":{
                  "type":"Point",
                  "coordinates":[
                     2.290084,
                     49.897443
                  ]
               },
               "properties":{
                  "label":"8 Boulevard du Port 80000 Amiens",
                  "score":0.49159121588068583,
                  "housenumber":"8",
                  "id":"80021_6590_00008",
                  "type":"housenumber",
                  "name":"8 Boulevard du Port",
                  "postcode":"80000",
                  "citycode":"80021",
                  "x":648952.58,
                  "y":6977867.25,
                  "city":"Amiens",
                  "context":"80, Somme, Hauts-de-France",
                  "importance":0.6706612694243868,
                  "street":"Boulevard du Port"
               }
            }
         ],
      },
    });

    expect(wrapper.text()).not.toContain('No data available.');
    expect(wrapper.text()).toContain('8 Boulevard du Port');
  });
});
