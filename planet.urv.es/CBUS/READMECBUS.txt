----------------------README--------------------------------------------

A connection bus for distributed components


Installation and Setup
-----------------------------------------------------

To test this software you need a Fry Server. 

A)  To launch Fry server, enter in the bin folder and execute run.bat
	
Now you can test the examples...


Running the samples

B.1) Clients 
Steps:        
	a) Run the producer 
		cd cbus/bin
		run cbus.examples.Client
	b) Run the consumer (connection client and info publisher)
		run cbus.examples.Client2
	
B.2) Massive Test
Steps:        
	a) Run the producer/consumer 
		cd cbus/bin
		run cbus.examples.Tester

B.3) Filters & Interceptor
Steps:        
	a) Run the producer
		cd cbus/bin
		run cbus.examples.Filter

        b) Configure de propierties file env.propierties
                Change the filters folder variable
	c) Run the consumer and filter
		cd cbus/bin
		run cbus.examples.Filter2
	d) Run other filter
		run cbus.examples.Filter3

B.4) Connection / Publisher Register
Steps:        
       a) Run the register producer 
		cd cbus/bin
		run cbus.examples.Client3
  
       b) Run the connection consumer 
		cd cbus/bin
		run cbus.examples.Client4
       c) Close the register producer and look the result on the consumer
                

B.5) Meta-Information
Steps:        
       a) Run the register producer 
		cd cbus/bin
		run cbus.examples.Client3
  
       b) Run the meta-information consumer 
		cd cbus/bin
		run cbus.examples.Client5
       c) look publisher information and the information of subscribers on the consumer

C) Junit Test

C.1) AWT version 
	  Run the test
              cd bus/bin
              test
     
C.2) Web report version
Steps:        
      a) Ini ant/java 
              cd bus/bin
              init
      b) Run test        
              ant test   


_____________________________________________________________________________________ 

Ruben Mondejar Andreu 
rma.si@estudiants.urv.es
_____________________________________________________________________________________  