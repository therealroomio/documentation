import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">
          Welcome to MitBridge Documentation
        </h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive guide for managing your WordPress and WooCommerce site
          using the Divi Builder theme.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Divi Builder</CardTitle>
            <CardDescription>
              Learn how to create and customize pages using the Divi Builder
              interface.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button
                asChild
                variant="secondary"
                className="w-full justify-start"
              >
                <Link href="/divi/getting-started">
                  Getting Started Guide →
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link href="/divi/building-pages">Building Pages →</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>WordPress Basics</CardTitle>
            <CardDescription>
              Essential information for managing your WordPress website.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button
                asChild
                variant="secondary"
                className="w-full justify-start"
              >
                <Link href="/wordpress/content">Content Management →</Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link href="/wordpress/users">User Management →</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>WooCommerce</CardTitle>
            <CardDescription>
              Set up and manage your online store with WooCommerce.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button
                asChild
                variant="secondary"
                className="w-full justify-start"
              >
                <Link href="/woocommerce/setup">Store Setup →</Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link href="/woocommerce/payments">
                  Payment Configuration →
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>
              Access official documentation and support resources.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Official Documentation</h3>
                <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                  <li>
                    <a
                      href="https://elegantthemes.com/documentation/divi/"
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Divi Builder Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wordpress.org/support/"
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WordPress Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://woocommerce.com/document/"
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WooCommerce Documentation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
