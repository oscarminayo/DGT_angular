package com.ipartek.formacion.dgt.api;

import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ipartek.formacion.modelo.pojo.Agente;
import com.ipartek.formacion.service.AgenteService;
import com.ipartek.formacion.service.impl.AgenteServiceImpl;

@CrossOrigin
@RestController
public class AgenteController {

	private final static Logger LOG = Logger.getLogger(AgenteController.class);
	private AgenteService agenteService;
	private ValidatorFactory factory;
	private Validator validator;
	
	public AgenteController() {
		super();
		agenteService = AgenteServiceImpl.getInstance();
		factory  = Validation.buildDefaultValidatorFactory();
    	validator  = factory.getValidator();
	}
	
	
	
	//las variables de la uri y los PathVariable han de llamarse igual.
	@RequestMapping( value= {"/api/agente/login/{numeroPlaca}/{pass}"}, method = RequestMethod.GET)
	public ResponseEntity<Agente> login( 
										@PathVariable String numeroPlaca, 
										@PathVariable String pass ){		
		
		//por defecto tenemos codigo 403
		ResponseEntity<Agente> response = new ResponseEntity<Agente>(HttpStatus.FORBIDDEN);
		try {
			
			//si existe el agente (diferente de null), tendremos un codigo 200
			Agente agente = agenteService.existe(numeroPlaca, pass);
			if ( agente !=null ) {
				response = new ResponseEntity<Agente>(agente, HttpStatus.OK);
			}		
			
		//si ocurre alguna excepcion tendremos codigo 500
		}catch (Exception e) {
			LOG.error(e);
			response = new ResponseEntity<Agente>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return response;
		
	}
	
	
	
	
}