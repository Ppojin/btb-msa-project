//package com.btb.user.configuration;
//
//import feign.Response;
//import feign.codec.ErrorDecoder;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.cloud.context.config.annotation.RefreshScope;
//import org.springframework.http.HttpStatus;
//import org.springframework.stereotype.Component;
//import org.springframework.web.server.ResponseStatusException;
//
//@Component
//@RefreshScope
//public class FeignErrorDecoder implements ErrorDecoder {
//    //==================================================================//
//    // Environment env; //albums.exception.albums-not-found
//    // @Autowired
//    // public FeignErrorDecoder(Environment env) { this.env = env; }
//    @Value("${albums.exception.albums-not-found}")
//    String errorMessage;
//    //==================================================================//
//
//
//    @Override
//    public Exception decode(String methodKey, Response response) {
//        switch (response.status()){
//            case 400:
//                break;
//            case 404:
//                if(methodKey.contains("getAlbums")) {
//                    return new ResponseStatusException(
//                            HttpStatus.valueOf(response.status()),
//                            //==================================================================//
//                            // env.getProperty("exception.albums-not-found")
//                            this.errorMessage
//                            //==================================================================//
//                    );
//                }
//                break;
//            default:
//                return new Exception(response.reason());
//        }
//        return null;
//    }
//}
