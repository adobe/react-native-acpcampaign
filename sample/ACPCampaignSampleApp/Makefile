sync:
	(cd ../../ && rm adobe-react-native-acpcampaign-2.0.1.tgz || true)
	(cd ../../ && npm pack)
	(rm -rf node_modules/@adobe/react-native-acpcampaign || true)
	(rm package-lock.json || true)
	(npm cache clean --force && npm install)