# Robo-Poco
A Bot made for the Poco Gang discord server. Fork it and personalize it for your own server. Contact me if you have any questions at my Discord 
**ThatMajesticGuy#7530**

Here are some things you need to change if you are interested in forking:

# Channel and Role ID's
This specific bot was made for Poco Gang in mind. Thus, it calls for specific ID's for channels and roles. I would assume since you are creating a new bot, that the bot would not have access to those channels, so you need to change them to fit your server

##Commands where these occur:
- All of the Events
- All of the Moderator Commands
- selfRole command
- All of the Brawl Stars Commands

# Token, Brawl Stars API Key, and MongoDB Key.
These can all be easily fixed. 

To get your bot token, go [Here](https://discord.com/developers) and create an application. Then you want to go to bot and create a bot, and copy the token.

To get the Brawl Stars API Key, you want to go [To the Brawl Stars API Webpage](https://developer.brawlstars.com) to create an account. When you have created your account, you want to [Go to your Account Page](https://developer.brawlstars.com/#/account) and create a new API Key, and copy it.

The MongoDB Key is a bit tricky though, you want to go to [To MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_united%20states_search_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&gclid=Cj0KCQjwhtT1BRCiARIsAGlY51Ka4WUHxEKHTFSK16zvbfe2UJ7jducK-tCICkdutnJz_pRA3qCYDGYaAtfsEALw_wcB), and make an account. Once you have done that, create a free cluster with whatever settings you want. Then while the cluster is building, you will see to the left some options. Go to "Database Access" and add a database user with admin permissions and create a username and password, and jot that down. Once the cluster is done building, you will want to click on "Connect", then "Connect to my Application" and copy the link, replacing your password with the one you created. The bot will do the rest

Now take all of these keys, and create a file called `.env`. The file should include

```
BOT_TOKEN=Your bot token here
BS_KEY=Your Brawl Stars API Token Here
CON_STR=Your MongoDB Connection String
```
Note that the `.env` file should not have spaces anywhere.

If you followed these steps correctly you should be good to go! Feel free to make any adjustments but **Please leave credits to me somewhere in the bot, perferably in the `credits` command**
