<?php

namespace App\Controller;

use App\Entity\Product;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends Controller
{
    /**
     * @Route("/products/list/",  name="products_home")
     */
    public function index()
    {
        return $this->render("product/products-list.html.twig", []);
    }

    /**
     * @Route("/products/new/", name="product_new")
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function productNew(Request $request): JsonResponse
    {
        $product = new Product();
        $product->setName($request->request->get('title'));
        $product->setDescription($request->request->get('description'));
        $product->setAmount($request->request->get('amount'));
        $product->setType($request->request->get('type'));
        $product->setPrice(0);

        $em = $this->getDoctrine()->getManager();
        $em->persist($product);
        $em->flush();

        return new JsonResponse($product);
    }

    /**
     * @Route("/products/list/all/", name="product_list")
     *
     * @return JsonResponse
     */
    public function productList(): JsonResponse
    {
        return new JsonResponse($this->getDoctrine()->getManager()->getRepository(Product::class)->findAll());
    }

    /**
     * @Route("/products/list/delete/{id}", name="product_delete")
     *
     * @param int $id
     *
     * @return JsonResponse
     */
    public function deleteProduct(int $id): JsonResponse
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($em->getRepository(Product::class)->find($id));
        $em->flush();

        return new JsonResponse("Product (id = $id) removed!");
    }
}
