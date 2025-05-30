// === Arquivo: shein-auth.gs ===

/**
 * Gera a URL de autorização para obter o tmp_auth_code da SHEIN.
 */
function gerarLinkAutorizacaoShein() {
  const authBaseUrl = 'https://openapi-sem.sheincorp.com/#/empower';
  const redirectUrl = Utilities.base64EncodeWebSafe('https://www.seusite.com/callback'); // Substitua pela sua URL de callback registrada
  const appid = 'SEU_APP_ID'; // Substitua pelo seu appid real
  const state = 'AUTH-SHEIN-' + Date.now();

  const urlCompleta = `${authBaseUrl}?appid=${appid}&redirectUrl=${redirectUrl}&state=${state}`;

  Logger.log('[INFO] URL de autorização SHEIN gerada:');
  Logger.log(urlCompleta);
}