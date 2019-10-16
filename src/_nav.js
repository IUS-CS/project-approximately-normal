export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      title: true,
      name: 'IUS Esports',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Tournament',
      url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Calendar',
      url: '/theme/typography',
      icon: 'icon-pencil',
    },
    {
      name: 'Polls',
      url: '/buttons',
      icon: 'icon-cursor',
    },
    {
      name: 'Recruitment',
      url: '/charts',
      icon: 'icon-pie-chart',
    },
  ],
};
