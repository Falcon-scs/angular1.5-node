
class HomeController {
  constructor(ApiService) {
    this.apiService = ApiService;
    var vm = this;

    vm.val_a = 0;
    vm.val_b = 0;
    vm.sum = 0;

    vm.error = "Error";
  }

  onSum() {
    var vm = this;
    this.apiService.sum(vm.val_a, vm.val_b).then(res => {
      this.sum = res;
    })
  }
}

const homeComponent = {
  template: require('./home.html'),
  controller: HomeController
};

export default homeComponent;