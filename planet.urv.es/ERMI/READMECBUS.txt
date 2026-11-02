----------------------README--------------------------------------------

ERMI Beta 1
Pedro García López  July 2003.
Version working with connection bus (Beta 1). 

Installation and Setup
-----------------------------------------------------

To test this software you will use our connection bus Event Service.

A) Connection bus
	Launch Fry Server
		cd bus/bin
		fryserver.bat
	Your applications will use the env.properties included in bus/bin
	
Now you must change the CLASS_STORE PATH in env.properties to your current path: BUS/bin/class_store.
	
	
Now you can test the examples...
BUS/bin/test.bat



B. Running the samples

B.1 Simple (ermi.samples.simple)

Steps: (A, B, C, and D are optional, Stubs and Skels are already compiled in this distribution).
	a) Generating stubs and skeletons
		cd bus/bin
		rmic ermi.samples.simple.Simple
		Stubs and skeletons (.java) are located in bus/bin.
	b) Compile Stub and Skel 
	c) Code Impl class (included in this sample)
	d) Code Server and Client
	e) run the Server
		run ermi.samples.simple.SimpleServer
	f) run the Client
		run ermi.samples.simple.SimpleClient
	
B.2 Naming (ermi.samples.naming)

Steps:
	a) run the registry
		eregistry
	b) Code Server and Client
	c) run the Server
		run ermi.samples.naming.SimpleNamingServer
	d) run the List Client
		run ermi.samples.naming.SimpleNamingList
	e) run the Client
		run ermi.samples.naming.SimpleNamingClient

B.3 Listeners (ermi.samples.listener)
Steps:
	
	a) run the Server
		run ermi.samples.listener.SpriteServer
	b) run the Client 2 (listener)
		run ermi.samples.listener.SpriteClient2
	c) run the Client 2 (listener) again
		run ermi.samples.listener.SpriteClient2	
	d) run the Client 1 (setX) again
		run ermi.samples.listener.SpriteClient1

B.4 Basic Types (ermi.samples.basictypes)
Steps:
	
	a) run the Server
		run ermi.samples.basictypes.SpriteServer
	b) run the Client 
		run ermi.samples.basictypes.SpriteClient

B.5 Filters and Interception
Steps:

	a) run the registry
		eregistry
	b) Code Server and Client
	c) run the Server
		run ermi.samples.naming.SimpleNamingServer
	d) run the Interceptor
		run ermi.samples.filter.LogFilterServer
	e) run the Client
		run ermi.samples.naming.SimpleNamingClient
B.5 Filters and Interception (Removing filters)
Steps:

	a) run the registry
		eregistry
	b) Code Server and Client
	c) run the Server
		run ermi.samples.naming.SimpleNamingServer
	d) run the Interceptor 1 (Console 1)
		run ermi.samples.filter.LogFilterServer
	e) run the Interceptor 2 (Console 2)
		run ermi.samples.filter.LogFilterServer	
		or 
		run ermi.samples.ignorefilter.IgnoreServer	
	f) run the Client
		run ermi.samples.naming.SimpleNamingClient
	g) In Console 1 or 2 print exit. The Filter is then removed.
	h) run the Client
		run ermi.samples.naming.SimpleNamingClient
		
B.6 Dynamic class loading
	a) Remove the class bus\classes\ermi\samples\dynamic\SimpleStub
	b)run the Server
		run ermi.samples.dynamic.SimpleServer
	c) run the Client
		run ermi.samples.dynamic.SimpleClient
	You will see REMOTE msg as a result of the dymanic class load.
	The class store is defined in env.properties.	
	
	
	
B.7 Mobile Objects

	a) run the Teleport Server
		run ermi.samples.mobile.TeleportServer
	b) run the Teleport Client
		run ermi.samples.mobile.TeleportClient
	c) 	run the Client
		run ermi.samples.simple.SimpleClient
	d) Press any key in Teleport Client, the SimpleServer is sent to TeleportServer
	e) run the Client
		run ermi.samples.simple.SimpleClient
		
B.8 Exceptions

 	a) run the Server
		run ermi.samples.exception.SimpleServer
	b) run the Client
		run ermi.samples.exception.SimpleClient
		
B.9 Pass by reference

	a) run the PlaceServer
			run ermi.samples.reference.PlaceServer
	b) run the UserServer (and add it to the Place)
			run ermi.samples.reference.UserServer
	c) run the UserClient
			run ermi.samples.reference.UserClient

B.10 Object replicas
	a) run the Registry
			eregistry
	b) run the SpriteClient1
			run ermi.samples.replica.SpriteClient1
	c) run the SpriteClient2
			run ermi.samples.replica.SpriteClient2
	d) run the SpriteClient3
			run ermi.samples.replica.SpriteClient3



	