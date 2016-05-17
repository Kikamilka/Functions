function createSecretHolder(secret) {
	var _secret = secret;
	return {
		getSecret: function(){
			return _secret;
		},
		setSecret: function (secret){
			_secret = secret;
		}
	};
}


/* it's good! (it's note for me)
function createSecretHolder(secret) {
  return {
    getSecret: function() { return secret; },
    setSecret: function(v) { secret = v; }
  };
} */