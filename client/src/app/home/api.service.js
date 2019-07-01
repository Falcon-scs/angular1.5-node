class ApiService {

  constructor($http) {
    this.$http = $http;
  }

  sum(a, b) {
    const serverUrl = 'http://localhost:5000';
    const url = serverUrl + '/sum';
    return new Promise((resolve, reject) => {
      this.$http({
        headers: {
          'Content-Type': 'application/json '
        },
        method: 'POST',
        url: url,
        data: {
          a, b
        }
      }).then(function successCallback(response) {
        let data = response.data;
        resolve(data.sum);
      }, function errorCallback(response) {
        reject();
      });
    })
    

  }
}
export default ApiService;