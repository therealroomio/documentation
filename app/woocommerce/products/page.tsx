import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'WooCommerce Products - MitBridge Documentation',
  description: 'Learn how to manage products in your WooCommerce store.'
}

export default function WooCommerceProducts() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Product Management</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to add, edit, and manage products in your WooCommerce store.
        </p>
      </div>

      <Alert>
        <AlertTitle>Product Organization</AlertTitle>
        <AlertDescription>
          Organize your products effectively using categories, tags, and
          attributes. This helps customers find products easily and improves
          your store&apos;s SEO.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Adding New Products</CardTitle>
            <CardDescription>
              Steps to create new products in WooCommerce.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal space-y-3 pl-4">
              <li>Navigate to Products → Add New</li>
              <li>Enter product title and description</li>
              <li>Set product type and pricing</li>
              <li>Add product images and gallery</li>
              <li>Configure inventory settings</li>
              <li>Set shipping options if applicable</li>
            </ol>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="types">
            <AccordionTrigger>Product Types</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Simple Product:</strong> Single product with no
                  variations
                </li>
                <li>
                  <strong>Variable Product:</strong> Product with multiple
                  options
                </li>
                <li>
                  <strong>Grouped Product:</strong> Set of related products
                </li>
                <li>
                  <strong>Virtual Product:</strong> Intangible items (services)
                </li>
                <li>
                  <strong>Downloadable:</strong> Digital products
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="attributes">
            <AccordionTrigger>Product Attributes</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Global Attributes:</strong> Used across multiple
                  products
                </li>
                <li>
                  <strong>Custom Attributes:</strong> Specific to single
                  products
                </li>
                <li>
                  <strong>Variations:</strong> Create product options
                </li>
                <li>
                  <strong>Terms:</strong> Individual attribute values
                </li>
                <li>
                  <strong>Display:</strong> Show on product pages
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="inventory">
            <AccordionTrigger>Inventory Management</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Stock Status:</strong> Track product availability
                </li>
                <li>
                  <strong>Stock Quantity:</strong> Manage inventory levels
                </li>
                <li>
                  <strong>Low Stock:</strong> Set threshold alerts
                </li>
                <li>
                  <strong>Backorders:</strong> Allow out-of-stock purchases
                </li>
                <li>
                  <strong>Stock Display:</strong> Show stock status to customers
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card>
          <CardHeader>
            <CardTitle>Product Categories</CardTitle>
            <CardDescription>
              Organize products for better navigation.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>Main Categories:</strong> Primary product groups
              </li>
              <li>
                <strong>Subcategories:</strong> Nested categorization
              </li>
              <li>
                <strong>Category Images:</strong> Visual representation
              </li>
              <li>
                <strong>Description:</strong> Category information
              </li>
              <li>
                <strong>Display Settings:</strong> Category page layout
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Product Data</CardTitle>
            <CardDescription>
              Configure product details and options.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>General:</strong> Price, tax status, and visibility
              </li>
              <li>
                <strong>Inventory:</strong> Stock management settings
              </li>
              <li>
                <strong>Shipping:</strong> Weight, dimensions, and class
              </li>
              <li>
                <strong>Linked Products:</strong> Upsells and cross-sells
              </li>
              <li>
                <strong>Advanced:</strong> Purchase notes and menu order
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>
              Continue configuring your WooCommerce store.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/woocommerce/payments">
                  Payment Configuration
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/woocommerce/troubleshooting">
                  Troubleshooting Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
