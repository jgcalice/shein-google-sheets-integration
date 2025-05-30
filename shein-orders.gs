// === Arquivo: shein-orders.gs ===

/**
 * Faz uma chamada autenticada para buscar pedidos da SHEIN (após obter access_token).
 */
function buscarPedidosShein(accessToken) {
  const appKey = 'SEU_APP_KEY';
  const appSecret = 'SEU_APP_SECRET';
  const method = 'order.list';
  const timestamp = Utilities.formatDate(new Date(), 'GMT+8', 'yyyy-MM-dd HH:mm:ss');

  const params = {
    app_key: appKey,
    method: method,
    access_token: accessToken,
    timestamp: timestamp,
    version: '1.0',
    sign_method: 'sha256'
  };

  const sortedKeys = Object.keys(params).sort();
  let signStr = appSecret;
  sortedKeys.forEach(key => {
    signStr += key + params[key];
  });
  signStr += appSecret;

  const rawSign = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, signStr, Utilities.Charset.UTF_8);
  const signHex = rawSign.map(b => (b < 0 ? b + 256 : b).toString(16).padStart(2, '0')).join('').toUpperCase();

  const payload = Object.assign({}, params, { sign: signHex });

  const options = {
    method: 'post',
    contentType: 'application/x-www-form-urlencoded',
    payload: payload,
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch('https://openapi-sg.sheincorp.com/router/rest', options);
  Logger.log(response.getContentText());
}