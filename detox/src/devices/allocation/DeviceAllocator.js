const { traceCall } = require('../../utils/trace');

class DeviceAllocator {
  constructor(allocationDriver) {
    this._driver = allocationDriver;
  }

  /**
   * @param deviceQuery { Object | String }
   * @return {Promise<DeviceCookie>}
   */
  allocate(deviceQuery) {
    return traceCall('allocateDevice', () =>
      this._driver.allocate(deviceQuery));
  }
}

class DeviceDeallocator {
  constructor(deallocationDriver) {
    this._driver = deallocationDriver;
  }
  /**
   * @param options { {shutdown: boolean} }
   * @return {Promise<void>}
   */
  free(options) {
    return this._driver.free(options);
  }
}

module.exports = {
  DeviceAllocator,
  DeviceDeallocator,
};